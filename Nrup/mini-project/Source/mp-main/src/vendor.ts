export interface person {
    name: string;
    address: string;
    email: string;
    contactNo: number;
    password: string;
    pincode: number;
    id: number
}
export interface vendorInterface extends person {
    shopname: string;

}
// export class vendor implements vendorInterface {
//     name: string;
//     address: string;
//     email: string;
//     contactNo: number;
//     password: string;
//     pincode: number;
//     id: number;
//     shopname: string;
//     constructor(name: string, shopname: string, address: string, email: string, contactNo: number, password: string, pincode: number, id: number) {
//         this.address = address;
//         this.name = name;
//         this.email = email;
//         this.contactNo = contactNo;
//         this.password = password;
//         this.pincode = pincode;
//         this.id = id
//         this.shopname = shopname
//     }



// }
export class vendorOperations {
    getData(): [] | vendorInterface[] | never {
        let data: string | null = localStorage.getItem("Vendordetails")
        if (data) {
            return JSON.parse(data)
        }
        else {
            return []
        }
    }
    addData(ven: vendorInterface): void {

        let localdata: [] | vendorInterface[] = this.getData()
        localdata[localdata.length] = ven
        localStorage.setItem("Vendordetails", JSON.stringify(localdata))

    }

    authenticate(email: string, password: string): vendorInterface|boolean { 
        
        let localdata: [] | vendorInterface[] = this.getData() 
        let i:vendorInterface;
        for(i of localdata){
            if((i.email==email)&&(i.password==password)){
                return i
            }
        }
        return false
    }

}

