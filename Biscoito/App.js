import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import cookie from './assets/fortune-cookies-int.png';
import brokenCookie from './assets/fortune-cookies-broken.png';


export default function App() {

  const [quebrarBiscoito, setQuebrarBiscoito] = useState(false)
  const [frase, setFrase] = useState('')

  const textos = [
    ' "Acredite em si mesmo e você será imbatível." ',
    ' "Seja a mudança que deseja ver no mundo." ',
    ' "O sucesso começa com uma decisão ousada." ',
    ' "Grandes sonhos exigem ação ousada." ',
    ' "A resiliência é a chave para superar desafios." ',
    ' "Siga em frente, não importa o quê." ',
    ' "A paciência é a virtude dos vencedores." ',
    ' "Cada dia é uma nova chance de brilhar." ',
    ' "Nunca subestime o poder de seu potencial." ',
    ' "A persistência leva à excelência." ',
    ' "Seja corajoso, mesmo quando sentir medo." ',
    ' "O otimismo é o combustível da realização." ',
    ' "Sorria, você está mais perto do que imagina." ',
    ' "A jornada é tão importante quanto o destino." ',
    ' "O sucesso é construído sobre pequenas vitórias." ',
    ' "O amor é a força mais poderosa do universo." ',
    ' "A gratidão transforma o que temos em suficiente." ',
    ' "A humildade é a base de toda grandeza." ',
    ' "O respeito é a chave para relacionamentos sólidos." ',
    ' "A compaixão é a cola que une a humanidade." ',
    ' "A esperança é a luz que guia nosso caminho." ',
    ' "A mudança é a única constante na vida." ',
    ' "A criatividade é a chama da inovação." ',
    ' "A simplicidade é a essência da elegância." ',
    ' "A determinação leva à superação." ',
    ' "A ação é o segredo de todo progresso." ',
    ' "A confiança é a chave para abrir portas." ',
    ' "O sucesso é uma jornada que você cria." ',
    ' "A autenticidade é o caminho para a felicidade." ',
    ' "A educação é a chave para um mundo melhor." ',
    ' "A verdade liberta a mente e o coração." ',
    ' "A harmonia nasce da compreensão." ',
    ' "A gentileza é a essência da beleza." ',
    ' "A inovação é o caminho para o futuro." ',
    ' "A resiliência é a força que vence desafios." ',
    ' "A gratidão é a atitude que abre portas." ',
    ' "A criatividade é a faísca da transformação." ',
    ' "A bondade é a luz que ilumina vidas." ',
    ' "A determinação é o motor do progresso." ',
    ' "A tolerância é o alicerce da harmonia." ',
    ' "A sabedoria é a bússola que guia decisões." ',
    ' "A fé move montanhas." ',
    ' "A paixão é a energia que alimenta sonhos." ',
    ' "A honestidade é o alicerce da confiança." ',
    ' "A coragem é a força que supera o medo." ',
    ' "O foco é o segredo para alcançar metas." ',
    ' "O sucesso é a soma de pequenos esforços." ',
    ' "A perseverança é o segredo dos campeões." ',
    ' "A criatividade é a chave para a inovação." ',
    ' "A gentileza é a linguagem universal." ',
    ' "A paciência é o caminho para a sabedoria." ',
    ' "A alegria está nas pequenas coisas." ',
    ' "A confiança em si mesmo é a chave." ',
    ' "O amor é a resposta para todas as perguntas." ',
    ' "A honestidade é a base de todas as relações." ',
    ' "O sucesso está ao alcance de todos." ',
    ' "O otimismo é a luz que ilumina o caminho." ',
    ' "A persistência é a arma dos vitoriosos." ',
    ' "A sabedoria é o tesouro mais valioso." ',
    ' "A ação é o primeiro passo para o sucesso." ',
    ' "A determinação é a força que impulsiona." ',
    ' "A gratidão transforma o comum em extraordinário." ',
    ' "A simplicidade é a chave da elegância." ',
    ' "A coragem é a chave para conquistar o impossível." ',
    ' "A paciência é a arte de esperar o momento certo." ',
    ' "A educação é a base de todas as conquistas." ',
    ' "A fé move montanhas, mas a ação as escala." ',
    ' "A humildade é a raiz da verdadeira grandeza." ',
    ' "A compaixão é o remédio para o coração." ',
    ' "A honestidade é a essência de uma vida plena." ',
    ' "A gentileza é a linguagem da alma." ',
    ' "A resiliência é a força que nos mantém firmes." ',
    ' "A esperança é a chama que nunca se apaga." ',
    ' "A generosidade é a dádiva que nunca se esgota." ',
    ' "A imaginação é o berço da inovação." ',
    ' "A sinceridade é a base de todas as relações." ',
    ' "A confiança é a chave para construir pontes." ',
    ' "O sucesso é o resultado do trabalho árduo." ',
    ' "A criatividade é a centelha da revolução." ',
    ' "A jornada é tão importante quanto o destino." '
  ];

  function exibirFrase() {
    setQuebrarBiscoito(true)
    const indiceAleatorio = parseInt(Math.random() * textos.length)
    setFrase(textos[indiceAleatorio])
  }

  return (

    <View style={styles.container}>
      
      <Image
        style={styles.image}
        source={quebrarBiscoito ? brokenCookie : cookie}
      />

      <Text
      style={styles.text}
      >
        {
          quebrarBiscoito ? frase : ''
        }
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={exibirFrase}
        disabled={quebrarBiscoito}
        >
        
        <Text
        style={styles.buttonText}>
          Quebrar biscoito!
        </Text>

      </TouchableOpacity>

      <TouchableOpacity
      style={styles.button}
      onPress={() => setQuebrarBiscoito(false)}
      >
        <Text
        style={styles.buttonText}>
          Pegar outro biscoito!
        </Text>
      </TouchableOpacity>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
  },

  image: {
    width: 320,
    height: 180,
    marginBottom: 30,
  },

  button: {
    width: 210,
    backgroundColor: '#f6f6f6',
    borderRadius: 100,
    paddingVertical: 12,
    paddingHorizontal: 32,
    alignItems: 'center',
    marginTop: 20,
  },

  buttonText: {
    fontSize: 16,
    color: '#474747',
    fontWeight: '500',
  },

  text: {
    fontSize: 20,
    marginVertical: 20,
    color: '#474747',
    fontWeight: '600'
  }
});
