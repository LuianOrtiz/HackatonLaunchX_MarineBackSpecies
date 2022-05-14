
class Animal {

    constructor(id, name, scientific_name, description, url_image, fk_habitad, fk_risk_status){
        this.id = id
        this.name = name
        this.scientific_name = scientific_name
        this.description = description
        this.url_image = url_image
        this.fk_habitad = fk_habitad
        this.fk_risk_status = fk_risk_status
    }
}

module.exports = Animal;