import { Router, Request, Response } from 'express';
import { parseNewTokens } from '../utils/utils';


const router = Router();


// Append picture hash to file
router.get('/tokens', async (req: Request, res: Response) => {
    const tokens = await parseNewTokens()
    const responseJson = {
        "tokens": tokens
    }
    res.status(200).send(responseJson);
});


export default router;
