import { Controller, Get } from "@nestjs/common";
import { ExptesService } from "./exptes.service";

@Controller("exptes")
export class ExptesController {
    constructor(private readonly exptesService: ExptesService) {}
    @Get()
    getExptes() {
        return this.exptesService.getExptes();
    }
}