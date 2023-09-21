import Expenses from "./components/Expense/Expenses";

// we can write this function as a arrow as well;  const App=()={}; 
function App() {
  
    const expenses = [
      {id:'e1',
       title:'Shopping', 
       amount:350, 
       date: new Date(2023,9,10)
      },

      {id:'e2',
       title:'Food',
       amount:400,
       date: new Date(2023,9,12)
    },

      {id:'e3',
       title:'Petrol',
       amount:550,
       date: new Date(2023,9,7)
    },

      {id:'e4',
       title:'other',
       amount:200,
       date: new Date(2023,9,14)
    }
  ];

  return (
    <div>

      <h2> Let's get Started </h2>

      <Expenses items={expenses}></Expenses>
        
    </div>

  );
}

export default App;
