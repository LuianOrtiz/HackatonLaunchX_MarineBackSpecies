
class Animal {

    /**
     * 
     * @param {int} id 
     * @param {string} name 
     * @param {string} scientific_name 
     * @param {string} description 
     * @param {string} url_image 
     * @param {Arraystring} url_asosiaciones 
     * @param {string} url_info 
     * @param {int} fk_habitad 
     * @param {int} fk_risk_status 
     */
    constructor(id, name, scientific_name, description, url_image, url_asosiaciones, url_info, fk_habitad, fk_risk_status){
        this.id = id
        this.name = name
        this.scientific_name = scientific_name
        this.description = description
        this.url_image = url_image
        this.url_asosiaciones = url_asosiaciones
        this.url_info = url_info
        this.fk_habitad = fk_habitad
        this.fk_risk_status = fk_risk_status
    }
}

module.exports = Animal;