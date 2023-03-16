import { writeFile, readFile } from 'fs/promises'

class productService {
    public validate(item: Object) {
        try {
            let teste = false;
            if (Array.isArray(item) === true) {
                console.log("array")
                teste = item.every((elemento) => {

                    const schema = { "nome": "Caneta", "qtde": 10, "preco": 7.99, "data_compra": "2023-03-15", "data_entrega": "2023-04-25" };
                    const keys = Object.keys(elemento);
                    console.log(keys)

                    return (keys.length === Object.keys(schema).length && JSON.stringify(keys) == JSON.stringify(Object.keys(schema)));
                })
                return teste;
            }
            if (!Array.isArray(item) && typeof item === 'object') {
                const schema = { "nome": "Caneta", "qtde": 10, "preco": 7.99, "data_compra": "2023-03-15", "data_entrega": "2023-04-25" };
                const keys = Object.keys(item);

                teste = (keys.length === Object.keys(schema).length && JSON.stringify(keys) == JSON.stringify(Object.keys(schema)));

                return teste;
            }
        }
        catch (e) {
            console.error('error: ', e)
        }

        // const schema = { "nome": "Caneta", "qtde": 10, "preco": 7.99, "data_compra": "2023-03-15", "data_entrega": "2023-04-25" };
        // const keys = Object.keys(item);

        // console.log(keys.length === Object.keys(schema).length && JSON.stringify(keys) == JSON.stringify(Object.keys(schema)));
        // return (keys.length === Object.keys(schema).length && JSON.stringify(keys) == JSON.stringify(Object.keys(schema)));
    }

    public static writeJson(toWrite: Object) {
        try {
            writeFile('products.json', JSON.stringify(toWrite, null, 2))
            return "Done"
        } catch (e) {
            return "Failed"
        }
    }



}
export default new productService();

