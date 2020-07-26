export default () => {
  const grupoAtendimento = { id: 1, descricao: "Atendimento" };
  const grupoDenuncia = { id: 2, descricao: "Denúncia" };
  const grupoJuridico = { id: 3, descricao: "Jurídico" };
  const grupoSindicalizacao = { id: 4, descricao: "Sindicalização" };
  return [
    {
      id: 1,
      grupo: grupoDenuncia,
      descricao: "Quero denunciar assédio moral",
      tentaSolucao: false,
      solucao: null,
      permiteAnonimo: true,
      orientacoesChamado: "Descreva com detalhes a sua denúncia que iremos tomar as providências necessárias.",
    },
    {
      id: 2,
      grupo: grupoDenuncia,
      descricao: "Quero denunciar condições de trabalho",
      tentaSolucao: false,
      solucao: null,
      permiteAnonimo: true,
      orientacoesChamado: "Descreva com detalhes a sua denúncia que iremos tomar as providências necessárias.",
    },
    {
      id: 3,
      grupo: grupoJuridico,
      descricao: "Quero registrar uma reclamação",
      tentaSolucao: false,
      solucao: null,
      permiteAnonimo: false,
      orientacoesChamado: "Descreva com detalhes a sua reclamação que iremos tomar as providências necessárias.",
    },
    {
      id: 4,
      grupo: grupoJuridico,
      descricao: "Quero consultar o andamento de um processo",
      tentaSolucao: false,
      solucao: null,
      permiteAnonimo: false,
      orientacoesChamado: "Informe o processo que entraremos em contato",
    },
    {
      id: 5,
      grupo: grupoSindicalizacao,
      descricao: "Quero me sindicalizar",
      tentaSolucao: false,
      solucao: "Acesse o formulário e preencha com seus dados. https://aeronautas.org.br/associe-se-ao-sna/associacao-online.html",
      permiteAnonimo: true,
      orientacoesChamado: "Informe seu nome e telefone que entraremos em contato",
    },
    {
      id: 6,
      grupo: grupoAtendimento,
      descricao: "Qual o horário do atendimento presencial na sede",
      tentaSolucao: false,
      solucao: "Segunda a sexta, das 09h às 18h",
      permiteAnonimo: true,
      orientacoesChamado: "Informe seu nome e telefone que entraremos em contato",
    },
  ];
};
