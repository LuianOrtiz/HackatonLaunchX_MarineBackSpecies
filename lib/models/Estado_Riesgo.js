
class Estado_Riesgo {

    /**
     * 
     * @param {int} id 
     * @param {string} tipo_riesgo 
     * @param {string} caracteristicas 
     */
    constructor(id, tipo_riesgo, caracteristicas){
        this.id = id
        this.tipo_riesgo = tipo_riesgo
        this.caracteristicas = caracteristicas
    }

}

module.exports = Estado_Riesgo;