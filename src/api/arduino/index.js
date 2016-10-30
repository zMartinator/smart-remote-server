import express from 'express';
import { power, volumeUp, volumeDown, mute, channelUp, channelDown } from './arduino';


const router = express.Router();

router.post('/power', power);
router.post('/vUp', volumeUp);
router.post('/vDown', volumeDown);
router.post('/mute', mute);
router.post('/cUp', channelUp);
router.post('/cDown', channelDown);

export default router;
