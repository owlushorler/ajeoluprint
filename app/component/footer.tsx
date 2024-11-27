import Link from "next/link"
export default function Footer () {
return(
    <div className="bg-black text-white flex flex-col text-center " >
        <nav>
            <div className="">

            <h1>AJEOLU PRINT</h1>

            ajeolu.com.ng is a Lagos-based commercial printing company in
Nigeria with state-of-the-art printing machines and skilled expertise
to deliver high quality offset, wide format and digital printing solutions
for businesses and individuals at competitive pricing. Contact us now
for free consultation. Learn How it Works. Read our Terms and
Conditions, Privacy Policy and Return Policy 
            </div>
        </nav>
        <nav className="flex flex-col items-center" >
            <div>
            contact
            </div>
            <div>
                tel:+2348034548921
            </div>
            <div>
            <Link href="https://api.whatsapp.com/send?phone=2348034548921&text=hi" > <img className='h-4 w-4 mx-1' src="https://i.ibb.co/zhcNrLq/pngtree-whatsapp-icon-png-image-6315990.png" alt="pngtree-whatsapp-icon-png-image-6315990"/></Link>   
            </div>
            <div>
                email:ajeoluprint@gmail.com
            </div>
            <div>
                address: 4 Oredapo street sango ota
            </div>
        </nav>
        
    
    </div>
)
}