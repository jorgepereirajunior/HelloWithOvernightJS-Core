import { Server } from '@overnightjs/core'
import express from 'express'
import { HelloController } from './controllers/HelloController.'

export class SetupServer extends Server {
  constructor() {
    super()
  }

  public init(): void {
    this.setupExpress()
    this.setupContoller()
  }

  private setupExpress(): void {
    this.app.use(express.json())
  }

  private setupContoller(): void {
    this.addControllers([
      new HelloController()
    ])
  }
  
  public async start(): Promise<void> {

    this.app.listen(4000, () => {
      console.log('Server is running on port 4000')
    })
  }
}