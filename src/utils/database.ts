import ExpressoTradicional from '../assets/products/expresso-tradicional.png';
import ExpressoAmericano from '../assets/products/expresso-americano.png';
import ExpressoCremoso from '../assets/products/expresso-cremoso.png';
import ExpressoGelado from '../assets/products/expresso-gelado.png';
import CafeComLeite from '../assets/products/cafe-com-leite.png';
import Latte from '../assets/products/latte.png';
import Capuccino from '../assets/products/capuccino.png';
import Macchiato from '../assets/products/macchiato.png';
import Mocaccino from '../assets/products/mochaccino.png';
import ChocolateQuente from '../assets/products/chocolate-quente.png';
import Cubano from '../assets/products/cubano.png';
import Havaiano from '../assets/products/havaiano.png';
import Arabe from '../assets/products/arabe.png';
import Irlandes from '../assets/products/irlandes.png';

export const database_coffees = [
    {
        id: '1',
        name: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
        price: 9.9,
        categories: ['tradicional'],
        image_component: ExpressoTradicional,
    },
    {
        id: '2',
        name: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional',
        price: 9.9,
        categories: ['tradicional'],
        image_component: ExpressoAmericano,
    },
    {
        id: '3',
        name: 'Expresso Cremoso',
        description: 'Café expresso tradicional com espuma cremosa',
        price: 9.9,
        categories: ['tradicional'],
        image_component: ExpressoCremoso
    },
    {
        id: '4',
        name: 'Expresso Gelado',
        description: 'Bebida preparada com café expresso e cubos de gelo',
        price: 9.9,
        categories: ['tradicional', 'gelado'],
        image_component: ExpressoGelado
    },
    {
        id: '5',
        name: 'Café com Leite',
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        price: 9.9,
        categories: ['Tradicional', 'com leite'],
        image_component: CafeComLeite
    },
    {
        id: '6',
        name: 'Latte',
        description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        price: 9.9,
        categories: ['tradicional', 'com leite'],
        image_component: Latte,
    },
    {
        id: '7',
        name: 'Capuccino',
        description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
        price: 9.9,
        categories: ['tradicional', 'com leite'],
        image_component: Capuccino,
    },
    {
        id: '8',
        name: 'Macchiato',
        description: 'Café expresso misturado com um pouco de leite quente e espuma',
        price: 9.9,
        categories: ['tradicional', 'com leite'],
        image_component: Macchiato,
    },
    {
        id: '9',
        name: 'Mocaccino',
        description: 'Café expresso com calda de chocolate, pouco leite e espuma',
        price: 9.9,
        categories: ['tradicional', 'com leite'],
        image_component: Mocaccino,
    },
    {
        id: '10',
        name: 'Chocolate Quente',
        description: 'Bebida feita com chocolate dissolvido no leite quente e café',
        price: 9.9,
        categories: ['especial', 'com leite'],
        image_component: ChocolateQuente,
    },
    {
        id: '11',
        name: 'Cubano',
        description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
        price: 9.9,
        categories: ['especial', 'alcoólico', 'gelado'],
        image_component: Cubano
    },
    {
        id: '12',
        name: 'Havaiano',
        description: 'Bebida adocicada preparada com café e leite de coco',
        price: 9.9,
        categories: ['especial'],
        image_component: Havaiano
    },
    {
        id: '13',
        name: 'Árabe',
        description: 'Bebida preparada com grãos de café árabe e especiarias',
        price: 9.9,
        categories: ['especial'],
        image_component: Arabe
    },
    {
        id: '14',
        name: 'Irlandês',
        description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        price: 9.9,
        categories: ['especial', 'alcoólico'],
        image_component: Irlandes
    }
];