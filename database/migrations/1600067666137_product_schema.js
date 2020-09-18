'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductSchema extends Schema {
  async up () {
    const exists = await this.hasTable('products')
    if(!exists){
      this.createTable('products', table => {
        table.increments('id') //auto increment PRIMARY KEY 
        table.string('name', 255); //equivalent to VARCHAR(255) in MYSQL
        table
        .decimal('price', [10, 2]) //equivalent to DECIMAL(10,2) in MYSQL
        .unsigned()
        .notNullable()
        .defaultTo(0)
        table.datetime('created_datetime') //equivalent to DATETIME in MYSQL
        table.datetime('updated_datetime') //equivalent to DATETIME in MYSQL
      })
    }
  }

  async down () {
    const exists = await this.hasTable('products')
    if(exists){
      this.drop('products')
    }
  }
}

module.exports = ProductSchema
