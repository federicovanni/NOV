import { Injectable } from '@nestjs/common';
import { Expte } from './entities/expte.entity';
@Injectable()
export class ExpteRepository {
private expte: Expte [] = []
findAll(): Expte[] { 
    return this.expte;
}
save(newExpte: Expte): void {
    this.expte.push(newExpte);
}
}