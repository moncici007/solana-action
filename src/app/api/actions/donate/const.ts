import { PublicKey, clusterApiUrl } from "@solana/web3.js";
import dotenv from "dotenv";
dotenv.config();

export const DEFAULT_SOL_ADDRESS: PublicKey = new PublicKey(
  process.env.RECIPIENT ?? "G577rTpdVySAcWh6faqD3hj4RvnmKcp8f6hm58kwdjcG" // donate wallet
);

export const DEFAULT_SOL_AMOUNT: number = process.env.DEFAULTAMOUNT
  ? parseFloat(process.env.DEFAULTAMOUNT)
  : 0.1;

export const DEFAULT_RPC =
  process.env.RPC_URL_MAINNET ?? clusterApiUrl("mainnet-beta");

export const DEFAULT_TITLE = process.env.TITLE ?? "向@moncici_is_girl捐赠SOL";

export const DEFAULT_AVATOR = process.env.AVATAR;

export const DEFAULT_DESCRIPTION =
  process.env.DESCRIPTION ?? "支持Solana action的狂热爱好者";
