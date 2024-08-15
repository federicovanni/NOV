
import { NextFunction, Request, Response } from "express";


export function loggerGlobal(req: Request, res: Response, next: NextFunction){
    const { method, originalUrl } = req;
    const date = new Date().toISOString();
    console.log(`[${date}] ${method} ${originalUrl}`)
        next();}