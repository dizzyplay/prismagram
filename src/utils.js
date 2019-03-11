import {adjectives, nouns} from "./words";
import sgTransport from "nodemailer-sendgrid-transport";
import nodemailer from "nodemailer"
import dotenv from "dotenv";
import path from "path";

dotenv.config({path:path.resolve(__dirname,'.env')});

export const generateSecret = ()=>{
  const randomNumber = Math.floor(Math.random() * adjectives.length);
  return `${adjectives[randomNumber]} ${nouns[randomNumber]}`
};

export const sendMail = (email)=>{
  let options = {
    auth:{
      api_user:process.env.SENDMAIL_USERNAME,
      api_key:process.env.SENDMAIL_PASSWORD
    }
  };
  const client = nodemailer.createTransport(sgTransport(options));
  return client.sendMail(email)
};

export const sendSecretMail = (address, secret)=>{
  const email={
    from:"vovo@vovo.com",
    to: address,
    subject:"Login secret for presmagram😱",
    html: ` <h1>helo</h1> <br/> here's your login secret <br/>${secret}`
  }
  return sendMail(email)
}