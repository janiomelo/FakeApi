import express from 'express';
import AgendamentoController from './controllers/Agendamento';

const app = express();
app.use(express.json());

app.get("/novos-agendamentos", AgendamentoController.novosAgendamentos);
app.post("/confirmar-agendamentos", AgendamentoController.confirmaAgendamentos);

var porta = process.env.PORT || 8080;

app.listen(porta);
