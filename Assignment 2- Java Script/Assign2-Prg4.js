//EMI = [P x R x (1+R) ^ N] / [(1+R) ^ (N-1)]
//EMI = [Pprinciple x Rinterestrate x (1+Rinterestrate) ^ Ntenure] / [(1+Rinterestrate) ^ (Ntenure-1)]
//accepts Rinterestrate, Pprinciple, and Ntenure 
let i,p,t;

let emiAmout=(r,p,t)=>
{
    //Covert anual interest rate in to monthly interest rate.
     r= r/(12*100);
     console.log("Monthly Interest rate = "+ r);

     //convert tenure years into months
     t=t*12;
     console.log("Tenure in months  = "+ t);

     //calculate monthly EMI
     let emi=(p*r*Math.pow(1+r,t))/(Math.pow(1+r,t)-1);

    return emi;

}

let monthlyEmi=Math.round(emiAmout(7.5,4000000,15));

console.log("Monthly EMI is " +monthlyEmi);

