import { Component, NgZone, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ethers } from 'ethers';

declare const window: {
  ethereum: {
    request<T>(data: {method: string, params?: any[]}): Promise<T>;
    on<T>(event: string, callback: (result: T) => void): void;
  }
};

const networks = {
  1: 'Ethereum Mainnet',
  56: 'Binance Smart Chain',
  137: 'Polygon',
  10: 'Optimism'
};

const networksRpc = {
  1: 'https://web3-node.1inch.io',
  56: 'https://bsc-nodes.1inch.io',
  137: 'https://bor-nodes.1inch.io',
  10: 'https://optimism-nodes.1inch.io'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  // BUSD token
  readonly tokenAddress = '0xe9e7cea3dedca5984780bafc599bd69add087d56';

  // 1inch V3 router contract
  readonly spenderAddress = '0x11111112542d85b3ef69ae05771c2dccff4faa26';

  readonly walletAddress$ = new BehaviorSubject<string>('');

  readonly approveTxHash$ = new BehaviorSubject<string>('');

  readonly networkId$ = new BehaviorSubject<number | null>(null);

  readonly networkName$ = this.networkId$.pipe(
    map(networkId => {
      if (networkId === null) {
        return null;
      }

      return networks[networkId] || networkId;
    })
  );

  readonly allowanceAmount$ = new BehaviorSubject<string>('');

  get ethersProvider(): ethers.providers.JsonRpcProvider {
    const currentChainId = this.networkId$.value!;

    if (!this.ethersProviderCache[currentChainId]) {
      this.ethersProviderCache[currentChainId] = new ethers.providers.JsonRpcProvider(
        {
          url: networksRpc[currentChainId]
        },
        {
          name: networks[currentChainId],
          chainId: currentChainId
        }
      );
    }

    return this.ethersProviderCache[currentChainId];
  }

  allowanceLoadingInProgress = false;

  private ethersProviderCache = {};

  constructor(
    private ngZone: NgZone,
  ) {
  }

  ngOnInit() {
    this.connectWallet();
    this.persistChainId();
  }

  // TODO: get info about account
  connectWallet(): void {
    // window.ethereum - our RPC & Wallet endpoint

    // TODO: 1 Ask for current address

    // TODO:2 Subscribe on account changes
  }

  // TODO: get info about chain
  persistChainId() {
    // TODO: 1 Ask for current chaind

    // TODO: 2 Subscribe on account changes
  }

  loadAllowance() {
    this.allowanceLoadingInProgress = true;

    this.getAllowance().then(allowance => {
      this.allowanceAmount$.next(allowance);
    }).finally(() => {
      this.allowanceLoadingInProgress = false;
    });
  }

  async getAllowance(): Promise<string> {
    const provider = this.ethersProvider;
    const spenderAddress = this.spenderAddress;
    const walletAddress = this.walletAddress$.value;
    const tokenAddress = this.tokenAddress;

    // TODO: implement
    return Promise.resolve('');
  }

  setAllowance(): void {
    const amount = '25000000000000000000';
    const spenderAddress = this.spenderAddress;
    const walletAddress = this.walletAddress$.value;
    const tokenAddress = this.tokenAddress;

    // TODO: implement
    return;
  }
}
