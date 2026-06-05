// Perguntas do quiz
const perguntas = [
  {
    enunciado: "Qual é a temperatura máxima segura para o armazenamento de vacinas?",
    opcoes: ["2°C", "8°C", "15°C", "25°C"],
    correta: 1,
  },
  {
    enunciado: "Qual porcentagem das vacinas é desperdiçada todo ano por falhas na cadeia de frio?",
    opcoes: ["10%", "25%", "Até 50%", "75%"],
    correta: 2,
  },
  {
    enunciado: "Qual tecnologia o Heat Space usa para detectar ondas de calor antes de elas chegarem aos postos médicos?",
    opcoes: ["Drones de reconhecimento", "Satélite LEO", "Estações meteorológicas locais", "Sensores de solo"],
    correta: 1,
  },
  {
    enunciado: "Qual lei física é usada para calcular em quantas horas a geladeira atingiria os 8°C críticos?",
    opcoes: ["Lei de Boyle", "Lei de Faraday", "Lei do Resfriamento de Newton", "Lei de Ohm"],
    correta: 2,
  },
  {
    enunciado: "Qual microcontrolador atua localmente na geladeira para reforçar o resfriamento e disparar o alarme?",
    opcoes: ["Raspberry Pi", "ESP32", "Arduino", "STM32"],
    correta: 2,
  },
  {
    enunciado: "Qual porcentagem das falhas na cadeia de frio tem origem humana?",
    opcoes: ["50%", "70%", "80%", "90%"],
    correta: 3,
  },
  {
    enunciado: "Qual é a sigla para a medição de temperatura de superfície feita pelo satélite?",
    opcoes: ["TSC", "LST", "TBS", "MST"],
    correta: 1,
  },
  {
    enunciado: "Quantas vidas são salvas por vacinas por ano, segundo os dados do Heat Space?",
    opcoes: ["1,2 milhão", "2,8 milhões", "4,2 milhões", "6 milhões"],
    correta: 2,
  },
  {
    enunciado: "Qual porcentagem das unidades de saúde em regiões remotas da África não tem eletricidade confiável?",
    opcoes: ["28%", "42%", "58%", "73%"],
    correta: 2,
  },
  {
    enunciado: "Qual sensor é usado no Arduino do Heat Space para medir temperatura e umidade?",
    opcoes: ["DHT11", "DHT22", "LM35", "BME280"],
    correta: 1,
  },
];

export { perguntas };