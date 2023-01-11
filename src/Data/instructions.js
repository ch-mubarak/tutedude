import people from "../svg/people.svg";
import rupees from "../svg/rupees.svg";
import wallet from "../svg/wallet.svg";
import discount from "../svg/discount.svg";
import coupon from "../svg/coupon.svg";
const instructions = [
  {
    id: "11",
    title: "Invite your Friends",
    desc: "Share the link tutedude.com with your friends",
    icon: people,
  },
  {
    id: "22",
    title: "Friend purchases any course",
    desc: "Using your REFERRAL CODE in the payments page",
    icon: coupon,
  },
  {
    id: "33",
    title: "You get ₹ 200 as referral money",
    desc: "On total purchase the friend makes, into your wallet",
    icon: rupees,
  },
  {
    id: "44",
    title: "Your Friend gets ₹ 200 Off ",
    desc: "On his overall fee on successful purchase using your referral code ",
    icon: discount,
  },
  {
    id: "55",
    title: "Transfer money from wallet",
    desc: "When the wallet balance reaches ₹200 or more, you can withdraw it",
    icon: wallet,
  },
];

export default instructions;
