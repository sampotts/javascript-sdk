import config from './config';
import http from './http';
import Cart from './models/cart';

class SelzClient {
    constructor(props) {
        this.config = Object.assign(
            {
                domain: '',
                id: -1,
            },
            props,
        );

        if (!this.isIdSet() && !this.isDomainSet()) {
            throw Error('user or domain are required');
        }
    }

    isIdSet() {
        return Number.isInteger(this.config.id) && this.config.id !== -1;
    }
    isDomainSet() {
        return typeof this.config.domain === 'string' && this.config.domain.length;
    }

    /**
     * Get product data
     * @param {String} url - Short or full URL for a product
     */
    getProduct(url) {
        return http.get(config.urls.product(this.config.env, url));
    }

    /**
     * Get all products
     */
    async getAllProducts() {
        await this.getUser();

        return http.get(config.urls.products(this.config.env, this.config.id));
    }

    /**
     * Get the Store ID
     * TODO: Queue this somehow?
     */
    getUser() {
        if (this.isIdSet()) {
            return new Promise(resolve => resolve(this.config.id));
        }

        return new Promise((resolve, reject) => {
            http
                .get(config.urls.userId(this.config.env, this.config.domain))
                .then(json => {
                    this.config.id = json.id;
                    resolve(json.id);
                })
                .catch(error => reject(error));
        });
    }

    /**
     * Create a new shopping cart
     * @param {String} currency - ISO currency code
     * @param {String} discount - Discount code (optional)
     */
    async createCart(currency, discount) {
        await this.getUser();

        return http.post(config.urls.createCart(this.config.env, this.config.id), {
            currency,
            discount: typeof discount === 'string' && discount.length ? discount : null,
        });
    }

    /**
     * Get a shopping cart
     * @param {String} id - The shopping cart id
     */
    async getCart(id) {
        await this.getUser();

        return new Promise((resolve, reject) => {
            http
                .get(config.urls.getCart(this.config.env, id))
                .then(json => {
                    resolve(new Cart(json));
                })
                .catch(reject);
        });
    }
}

export default SelzClient;