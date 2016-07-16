import express from 'express';
import { index, show, create, update, destroy } from './person.controller';

const router = express.Router();

router.get('/', index);
router.get('/:id', show);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', destroy);

module.exports = router;
