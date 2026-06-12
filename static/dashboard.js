const disconnectButton = document.getElementById("log-out");

const accountInfo = document.getElementById("acc-info");
const SaccountInfo = document.getElementById("Sacc-info");
const noSharedAccountInfo = document.getElementById('no-sharedAcc-info');

const moneyButtons = document.getElementsByClassName('money-button');
const createSharedAcc = document.getElementById("create-shared-account");
const joinSharedAcc = document.getElementById("join-shared-account")

if (createSharedAcc != null){
    
    
    createSharedAcc.addEventListener("click", () => {
        if (document.getElementById("sharedMoneyCreation") != null){
            document.getElementById("sharedMoneyCreation").remove();
        }
        if (document.getElementById("sharedMoneyJoin") != null){
            document.getElementById("sharedMoneyJoin").remove();
        }
        const newDivC = document.createElement("div");
        newDivC.id = "sharedMoneyCreation";
        newDivC.innerHTML = 
        `
            <h3>Create Shared Account</h3>
            <form method = "POST">
                <input type="text" name="createNameSharedAccount" placeholder="Name of shared account">
                <input type="password" name="passwordSharedAccount" placeholder="Password of shared account">
                <input type="submit" value="Create">

            </form>
        `;
        noSharedAccountInfo.appendChild(newDivC);

    })
    joinSharedAcc.addEventListener("click", () => {
        if (document.getElementById("sharedMoneyCreation") != null){
            document.getElementById("sharedMoneyCreation").remove();
        }
        if (document.getElementById("sharedMoneyJoin") != null){
            document.getElementById("sharedMoneyJoin").remove();
        }
        const newDivJ = document.createElement("div");
        newDivJ.id = "sharedMoneyJoin";
        newDivJ.innerHTML = 
        `
            <h3>Join Shared Account</h3>
            <form method = "POST">
                <input type="text" name="joinNameSharedAccount" placeholder="Name of shared account">
                <input type="password" name="passwordSharedAccount" placeholder="Password of shared account">
                <input type="submit" value="Join">
            </form>
        `;
        noSharedAccountInfo.appendChild(newDivJ);
    })
}

Array.from(moneyButtons).forEach(element => {
    element.addEventListener("click", () => {
        if (document.getElementById("moneyMenu") != null){
            document.getElementById("moneyMenu").remove();
        }
        const newDiv = document.createElement("div");
        newDiv.id = "moneyMenu";
        switch(element.value){
            case "add-acc":
                newDiv.innerHTML=
                `
                    <h3>Add money</h3>
                    <form method = "post">
                        <input required type = 'number' name = 'amount-add' placeholder='Amount of money'>
                        <input type = "submit" value="Add">
                    </form>
                `
                accountInfo.appendChild(newDiv)
                break;
                
            case "send-acc":
                newDiv.innerHTML=
                `
                    <h3>Send money</h3>
                    <form method = "post">
                        <input required type = 'number' name = 'amount-send' placeholder='Amount of money'>
                        <input required type = 'email' name = 'send-email' placeholder='Email'>
                        <input type = "submit" value="Send">
                    </form>
                `
                accountInfo.appendChild(newDiv)
                break;

            case "withdraw-acc":
                newDiv.innerHTML=
                `
                    <h3>Withdraw money</h3>
                    <form method = "post">
                        <input required type = 'number' name = 'amount-withdraw' placeholder='Amount of money'>
                        <input type = "submit" value="Withdraw">
                    </form>
                `
                accountInfo.appendChild(newDiv)
                break;


            case "add-Sacc":
                newDiv.innerHTML=
                `
                    <h3>Add money</h3>
                    <form method = "post">
                        <input required type = 'number' name = 'amount-Sadd' placeholder='Amount of money'>
                        <input type = "submit" value="Add">
                    </form>
                `
                SaccountInfo.appendChild(newDiv)
                break;
                
            case "withdraw-Sacc":
                newDiv.innerHTML=
                `
                    <h3>Withdraw money</h3>
                    <form method = "post">
                        <input required type = 'number' name = 'amount-Swithdraw' placeholder='Amount of money'>
                        <input type = "submit" value="Withdraw">
                    </form>
                `
                SaccountInfo.appendChild(newDiv)
                break;

        }
    });
});