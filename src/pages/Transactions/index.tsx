import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHightLight, TransactionContainer, TransactionTable } from "./styles";

export function Transactions() {
    return(
        <div>
            <Header />
            <Summary />

         <TransactionContainer>
            <SearchForm />

            <TransactionTable>
                    <tbody>
                        <tr>
                            <td width='50%'>Desenvolvimento de site</td>
                            <td>
                                <PriceHightLight variant="income">
                                    R$ 12.000,00
                                </PriceHightLight>
                            </td>
                            <td>Venda</td>
                            <td>24/05/2023</td>
                        </tr>

                        <tr>
                            <td width='50%'>Hamburguer</td>
                            <td>
                                <PriceHightLight variant="outcome">
                                   - R$ 60,00
                                </PriceHightLight>
                            </td>
                            <td>Alimentação</td>
                            <td>24/05/2023</td>
                        </tr>
                    </tbody>
                </TransactionTable>
         </TransactionContainer>
        </div>
    )
}