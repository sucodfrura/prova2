import { Link } from "react-router-dom";



export default function index () {

   return (
       <main>


         <h1> home </h1>

         <Ul>

<Li>  <Link to = './Corprimaria' > corprimaria  </Link>   </Li>
<Li>  <Link to = './Frequencia' > Frequencia </Link>   </Li>
<Li>  <Link to = './Ingresso' > Ingresso </Link>   </Li>
<Li>  <Link to = './Maiornumero' > Maiornumero  </Link>   </Li>


         </Ul>

       </main>
          )
}