pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;

contract InsuranceContractStepChallenge {
    
    uint MONTHLY_FEE=50000;
    uint REDUCED_MONTHLY_FEE=MONTHLY_FEE/2;
    uint PAYOUT=500000;

    address payable insurer;
    address payable[] insurees;
    address trustedDoctor;
  
    address alarm;
  
    mapping (address => bool) succeededStepChallenge;
    mapping (address => bool) paidForMonth;
    mapping (address => bool) validClaim;
    
    uint stepTarget=10000;
    
    address payable owner;
    
    
    constructor(
        
        address payable[] memory _insurees,
        address payable  _insurer,
        address _trustedDoctor
        
        ) public payable {
            //require(_minApprovers <=_approvers.length, "Required number of approvers should be less than approvers");
            
            insurees=_insurees;
            insurer=_insurer;
            trustedDoctor=_trustedDoctor;
            owner=msg.sender;
            
            /*for(uint i=0; i<_approvers.length;i++){
                address approver = _approvers[i];
                isApprover[approver] = true;
            }*/
            
        }
        
   /* function makeClaim() public {
        
        require(validClaim[msg.sender], "Claim not valid");
        
        
        //!TODO Pay out moneys
        
        
        
        /*if(!approvedBy[msg.sender]){
            approvalsNum++;
            approvedBy[msg.sender]=true;
        }
        
        if (approvalsNum == minApprovers){
            beneficiary.send(address(this).balance);
            selfdestruct(owner);
        }*/
    //}
    
    
    
    
    function processMonth() public {
        require(msg.sender==alarm, "It's not the end of the month yet");
        
        //processClaims
         for(uint i=0; i<insurees.length;i++){
             
               address payable mi=insurees[i];
                
                if(validClaim[mi] && paidForMonth[mi]){
                    mi.transfer(PAYOUT);
                }
                
                paidForMonth[mi]=false;
                
                //TODO transfer money to insurer
             
                
            }
        
    }
    
    
    function validateClaim(address  p_insuree) public {
        
        require(msg.sender==trustedDoctor, "No right to validate claim");
        validClaim[p_insuree]=true;

    }
    
    function reject() public {
        
        require(msg.sender==owner, "Not the owner");
        selfdestruct(owner);
    }
        
    }