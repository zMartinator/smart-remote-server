import express from 'express';
import { power, volumeUp, volumeDown, mute, channelUp, channelDown, up, down,
  right, left, enter, menu, input, exit, last, one, two, three, four, five,
  six, seven, eight, nine, zero } from './arduino';


const router = express.Router();

router.post('/power/:value', power);
router.post('/vUp/:value', volumeUp);
router.post('/vDown/:value', volumeDown);
router.post('/mute/:value', mute);
router.post('/cUp/:value', channelUp);
router.post('/cDown/:value', channelDown);
router.post('/up/:value', up);
router.post('/right/:value', right);
router.post('/down/:value', down);
router.post('/left/:value', left);
router.post('/enter/:value', enter);
router.post('/menu/:value', menu);
router.post('/input/:value', input);
router.post('/exit/:value', exit);
router.post('/last/:value', last);
router.post('/one/:value', one);
router.post('/two/:value', two);
router.post('/three/:value', three);
router.post('/four/:value', four);
router.post('/five/:value', five);
router.post('/six/:value', six);
router.post('/seven/:value', seven);
router.post('/eight/:value', eight);
router.post('/nine/:value', nine);
router.post('/zero/:value', zero);

export default router;
