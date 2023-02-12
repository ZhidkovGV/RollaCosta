import { Pipe, PipeTransform } from '@angular/core';
import { User } from '@app/shared/services/user.service';

@Pipe({
  name: 'totalWalletBalance',
})
export class TotalWalletBalancePipe implements PipeTransform {
  public transform(user: User): number {
    return user.wallets.reduce((acc, wallet) => acc + wallet.amount, 0);
  }
}
