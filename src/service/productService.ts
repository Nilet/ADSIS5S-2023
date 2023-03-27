import { writeFile, readFile } from 'fs/promises'

class productService {
    public validate(item: Object) {
        try {
            let valid = false;
            if (Array.isArray(item)) {
                valid = item.every(this.isValid);
                if (!valid) {
                    return "BodyError";
                }
            }
            if (!Array.isArray(item) && typeof item === "object") {
                valid = this.isValid(item);
                if (!valid) {
                    return "BodyError";
                }
            }
        }
        catch (e) {
            console.error('error: ', e)
        }

        try {
            this.writeJson(item)
            return "Done";
        } catch (e) {
            console.error("Error: " + e);
            return "CreatingError";
        }
    }

    private isValid(item: Object) {
        const schema = { "nome": "Caneta", "qtde": 10, "preco": 7.99, "data_compra": "2023-03-15", "data_entrega": "2023-04-25" };
        const keys = Object.keys(item);

        const returnValue = (keys.length === Object.keys(schema).length && JSON.stringify(keys) == JSON.stringify(Object.keys(schema)));

        return returnValue;
    }

    private writeJson(toWrite: Object) {
        writeFile('products.json', JSON.stringify(toWrite, null, 2))
    }

    private async getProducts() {
        const products = await readFile('products.json', 'utf8');

        return JSON.parse(products);
    }

    public async getStock() {
        const products = await this.getProducts();

        let stock: Object;

        if (Array.isArray(products)) {
            stock = products.map(produto => {
                let item = {
                    nome: produto.nome,
                    qtde: produto.qtde,
                    preco: produto.preco,
                    valor_estoque: produto.qtde * produto.preco
                }
                return item
            })
            return stock;
        }
        if (!Array.isArray(products) && typeof products === "object") {
            const stock = {
                nome: products.nome,
                qtde: products.qtde,
                preco: products.preco,
                valor_estoque: products.qtde * products.preco

            }

            return stock
        }

    }
}
export default new productService();

