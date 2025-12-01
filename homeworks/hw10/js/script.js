'use strict';

// Creating object user and checking is it allow to use service
const user = {
    name: "Alex",
    age: 25,
    email: "alex_ad@mail.lom",
    isSubscribed: true,
    balance: "124.20",
    verified: "1"
}
const userBalance = Number(user.balance);
const userVerified = user.verified === "1";

const userPermission = user.age > 17 && userVerified && (userBalance > 0 || user.isSubscribed); // Is user allow to use service(obj user checker)

const strictAgeCompare = user.age === 25;
const nonStrictAgeCompare = user.age == 25;

console.log(`Is user have permission to use service:  ${userPermission} \n strictAgeCompare: ${strictAgeCompare} \n nonStrictAgeCompare: ${nonStrictAgeCompare}`);

if (user.age < 18) {
    const ageRestriction = "Access restricted due to age";
}

// Creating object order and adding description for it
const order = {
    total: "340",
    currency: "USD",
    isPaid: false,
    delivery: "yes",
    priority: 1
}
const orderTotal = Number(order.total);
const orderDelivery = order.delivery === "yes";
const orderPriority = Boolean(order.priority);
const orderIsBig = Number(order.total) > 1000;

let orderDescription = "";
if (!order.isPaid) {
    orderDescription = "Order is not paid";
} else if (orderDelivery) {
    orderDescription = "Paid order with delivery";
} else if (orderIsBig) {
    orderDescription = "High-value paid order";
} else {
    orderDescription = "Paid order without delivery";
}
if (orderPriority) {
    orderDescription += " [PRIORITY]";
}

const strictTotalCompare = order.total === orderTotal;
const nonStrictTotalCompare = order.total == orderTotal;

// Creating object systemSettings and adding description for it
const systemSettings = {
    darkMode: true,
    fontSize: "18",
    language: "en",
    betaAccess: "true"
}

const systemSettingsFontSize = Number(systemSettings.fontSize);
const systemSettingsBetaAccess = systemSettings.betaAccess === "true";
const systemSettingsIsLargeFont = Number(systemSettings.fontSize) > 17;

let settingsDescription = "";
if (systemSettings.darkMode) {
    settingsDescription = "Dark mode";
    if (systemSettingsIsLargeFont) {
        settingsDescription += " + Large font";
    }
} else if (systemSettingsIsLargeFont) {
    settingsDescription = "Large font";
} else {
    settingsDescription = "Default settings";
}
if (systemSettingsBetaAccess) {
    settingsDescription += " Beta tester";
}

// finalAccess - is user allow to use this service
let denyingReasons = []; // reasons why access has denied

if (!userPermission) {
    denyingReasons.push("User access denied");
}
if (!order.isPaid && userBalance < orderTotal) {
    denyingReasons.push("Not enough funds or unpaid order");
}
if (
    systemSettingsFontSize < 13 || !(systemSettings.language === "en" || systemSettings.language === "uk")
) {
    denyingReasons.push("Invalid system settings");
}

const finalAccess = denyingReasons.length === 0;

if (finalAccess) {
    console.log("Full access granted");
} else {
    console.log("Access denied:");
    console.log(denyingReasons);
}



