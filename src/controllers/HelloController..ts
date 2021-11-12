import { Controller, Get } from '@overnightjs/core'
import { Request, Response } from 'express'


@Controller('greetings')
export class HelloController {

  @Get('')
  public sendMessage(_: Request, response: Response): Response {
    return response.json({
      "message": "Hello With OvernightJS/Core"
    })
  }
}