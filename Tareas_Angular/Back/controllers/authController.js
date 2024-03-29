const {response,request} = require('express');
const Conexion = require('../database/ConexionSequelize');
const bcrypt = require('bcrypt');
const {generarJWT} = require('../helpers/generate_jwt')

const login =  (req, res = response) => {
    const {email, password} = req.body;
    try{
        const conx = new Conexion();
        u = conx.checkLogin(email)    
            .then( usu => {
                console.log(usu.password)
                bcrypt.compare(password, usu.password, (err, result) => {
                    if (result) {
                        conx.getRolUserId(usu.id)
                        .then(roles=>{
                            let r=[]
                            for(let i=0;i<roles[0].assigned_rols.length;i++){
                                r.push(roles[0].assigned_rols[i].rol.description)
                            }
                            console.log(process.env.JWT_SECRET); 
                            const token = generarJWT(usu.id,r)
                            res.status(200).json({token});
                
                        })
                    } else {
                        
                        res.status(500).json({'msg':'La contraseña no es válida.'});
                    }
                 })
                 ;

            })
            .catch( err => {
                res.status(500).json({'msg':'Login incorrecto.'});
            });
    }
    catch(error){
        console.log(error);
        res.status(500).json({'msg':'Error en el servidor.'});
    }
    
}
const register =  (req, res = response) => {
    try{
        const conx = new Conexion();
            conx.insertUser(req.body)    
            .then( usu => {
                let data={
                    id_user: usu,
                    id_rol: 2
                }
                console.log(usu)
                a=conx.insertAssignedRol(data)
                
                .then(a=>{

                    const token = generarJWT(usu,['programmer'])
                    res.status(200).json({msg:'Registro correcto',token});
                })
                .catch(err=>{
                    res.status(400).json({msg:'Usuario registrado sin rol'})
                })
            })
            .catch( err => {
                res.status(500).json({'msg':'Error en el registro'});
            });
    }
    catch(error){
        console.log(error);
        res.status(500).json({'msg':'Error en el servidor.'});
    }
    
}


module.exports = {
    login,
    register
}