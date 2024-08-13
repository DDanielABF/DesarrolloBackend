import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  constructor(private readonly configService: ConfigService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const apiKey = request.headers['x-api-key'];
    const storedApiKey = this.configService.get<string>('MY_API_KEY');

    if (apiKey && apiKey === storedApiKey) {
      return true;
    } else {
      throw new UnauthorizedException('Invalid API Key');
    }
  }
}
