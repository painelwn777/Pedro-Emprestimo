// -------------------------------------------------------------
// 📩 MENSAGENS POR ETAPA
// -------------------------------------------------------------
mensagens: {

// Saudação por horário
saudacao() {
const hora = new Date().getHours();
if (hora >= 5 && hora < 12) return "☀️ Bom dia!";
if (hora >= 12 && hora < 18) return "🌤️ Boa tarde!";
return "🌙 Boa noite!";
},

// Etapa 1: Pedir nome
pedirNome() {
const saudacao = this.saudacao();
return `${saudacao}<br><br>
Meu nome é <b>Pedro da Silva Lima</b>.<br>
Atuo há mais de <b>12 anos</b> no segmento de empréstimos online, sempre prezando pela <b>segurança, transparência e atendimento humanizado</b>.<br><br>

🛡️ Atendimento direto, sem intermediários.<br>
🔒 Total sigilo e segurança dos seus dados.<br><br>

Para iniciarmos seu atendimento, informe por gentileza o seu <b>nome completo</b>. 😊`;
},

// Etapa 2: Apresentação
apresentacao(nome) {
return `Prazer, <b>${nome}</b>! 😊<br><br>

Sou o Pedro e acompanharei todo o seu processo do início ao fim.<br><br>

⚠️ <b>INFORMAÇÕES IMPORTANTES</b><br>
✅ Este é meu único canal oficial de atendimento.<br>
✅ Não trabalho com terceiros ou representantes.<br>
🚫 Desconfie de qualquer pessoa solicitando pagamentos em meu nome.<br><br>

📋 <b>COMO FUNCIONA O PROCESSO</b><br>
✔️ Taxa única de <b>R$ 250,00</b> para validação contratual.<br>
✔️ Liberação entre <b>15 minutos e 24 horas</b> após confirmação.<br>
✔️ Contrato digital e comprovantes enviados ao cliente.<br>
✔️ A taxa retorna como bonificação na última parcela.<br><br>

💰 <b>TABELA DE EMPRÉSTIMOS</b><br>
R$ 2.000 ➜ 20x de R$ 120<br>
R$ 3.000 ➜ 20x de R$ 180<br>
R$ 4.000 ➜ 30x de R$ 160<br>
R$ 5.000 ➜ 30x de R$ 200<br>
R$ 6.000 ➜ 36x de R$ 200<br>
R$ 7.000 ➜ 35x de R$ 240<br>
R$ 8.000 ➜ 40x de R$ 240<br>
R$ 9.000 ➜ 48x de R$ 225<br>
R$ 10.000 ➜ 38x de R$ 289,47<br>
R$ 20.000 ➜ 48x de R$ 500<br>
R$ 30.000 ➜ 50x de R$ 720<br><br>

👉 Deseja continuar?<br><br>

Responda com:<br>
<b>"sim"</b>, <b>"ok"</b>, <b>"interesse"</b> ou <b>"não tenho interesse"</b>.`;
},

// Etapa 3: Solicitação de documentos
documentos(nome) {
return `Excelente, <b>${nome}</b>! 🎉<br><br>

Para prosseguir com a análise, envie os seguintes documentos:<br><br>

📄 RG ou CNH (frente e verso)<br>
🆔 CPF<br>
🏠 Comprovante de residência atualizado<br>
💵 Comprovante de renda<br>
📧 E-mail válido<br>
💳 Chave Pix para recebimento<br><br>

Além disso, informe:<br><br>

💰 Valor desejado<br>
💳 Forma de pagamento da taxa: <b>Pix ou Boleto</b><br>
📅 Data de vencimento desejada: <b>10, 20 ou 30</b><br><br>

📎 Utilize o botão de anexo para enviar os documentos.<br><br>

Após concluir, digite:<br>
<b>ENVIADO</b>, <b>FEITO</b>, <b>PRONTO</b>, <b>OK</b> ou <b>CONCLUÍDO</b>.`;
},

// Etapa 4: Checkout
checkoutLink(nome) {
const link = "https://app.evopay.cash/checkout/cmqx8vm01002j1recmlffhypp";

return `✅ Perfeito, <b>${nome}</b>!<br><br>

Todos os documentos foram recebidos com sucesso.<br><br>

Para finalizar a contratação, acesse o checkout seguro abaixo e realize o pagamento da taxa de validação:<br><br>

🔗 <a href="${link}" target="_blank"><b>ACESSAR CHECKOUT - R$ 250,00</b></a><br><br>

📸 Após efetuar o pagamento, envie o comprovante aqui no chat.<br><br>

⏳ O valor será liberado entre <b>15 minutos e 24 horas</b> após a confirmação.`;
},

// Sem interesse
semInteresse(nome) {
return `Tudo bem, <b>${nome}</b>. 😊<br><br>

Agradeço pelo seu tempo e pela confiança.<br><br>

Caso precise futuramente de um empréstimo seguro e transparente, estarei à disposição.<br><br>

🙏 Tenha um excelente dia!`;
},

// Mensagem padrão
padrao(nome) {
return `${nome}, não consegui entender sua resposta. 😊<br><br>

Por favor, responda com:<br>
✔️ <b>sim</b><br>
✔️ <b>ok</b><br>
✔️ <b>interesse</b><br>
❌ <b>não tenho interesse</b><br><br>

Ou envie seus documentos utilizando o botão 📎 abaixo.`;
}
}
