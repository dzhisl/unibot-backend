import { Router, Request, Response } from 'express';
import { parseNewTokens } from '../utils/utils';


const router = Router();


router.get('/tokens', async (req: Request, res: Response) => {
    const tokens = await parseNewTokens()
    const responseJson = {
        "tokens": tokens
    }
    res.status(200).send(responseJson);
});


router.get('/health', async (req: Request, res: Response) => {

    res.status(200).send({status: "OK"});
});


export default router;
