import express from 'express';
import TranslateService from '../services/translate.service';
import Response from '../classes/Response';

const router = express.Router();
const _tService = new TranslateService();

router.get('/:word', (req, res, next) => {
    _tService.getTranslate(req.params.word).then(result => {
        res.send(new Response(result));
    }).catch(err => {
        console.log(err);
        res.send(new Response(null, false, err.message, err.code));
    });
});

router.post('/', (req, res, next) => {
    _tService.addTranslate(req.body.word, req.body.translate).then(result => {
        console.log(result);
        res.send(new Response(result));
    }).catch(err => {
        console.log(err);
        res.send(new Response(null, false, err.message, err.code));
    });
});

module.exports = router;
