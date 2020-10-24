import myCache from '../myCache';

export default {
    incrementaResolvido: (req, res) => {
        myCache.addResolvido();
        res.send();
    },
    incrementaNaoResolvido: (req, res) => {
        myCache.addNaoResolvido();
        res.send();
    },
    resultado: (req, res) => {
        res.send({
            resolvidos: myCache.getResolvido(),
            naoResolvidos: myCache.getNaoResolvido()
        });
    }
};
