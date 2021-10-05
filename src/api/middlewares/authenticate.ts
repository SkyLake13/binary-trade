import { Request, Response, NextFunction } from "express";

export function authenticate(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization;

    if(!token) {
        return res.sendStatus(401);
    }

    (req as any).user = {
        id: 'abhi12380'
    };

    return next();
}
