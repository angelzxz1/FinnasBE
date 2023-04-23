import Purchase from './models/purchase.js'

const models = {
    Purchase: Purchase.init
}
Object.values(models)
    .filter((model) => typeof model.associate === 'function')
    .forEach((model) => model.associate(models));

export default models
