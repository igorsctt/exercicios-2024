function viewMore() {
    let points = document.getElementById('points')
    let viewMore = document.querySelector('#viewMore')

    if (points.style.display == "none"){
        points.style.display = 'inline';
        viewMore.style.display = 'none';
    } else {
        points.style.display = 'none';
        viewMore.style.display = 'inline';
    }

}

function createTopic() {
    let discussions = document.querySelector('#discussions')

    let div = document.createElement('div')

    div.setAttribute('class', 'add-topic')
        
    div.innerHTML = '<p class="paragraphOne">Tem uma dúvida ou sugestão? Compartilhe seu feedback com os autores!</p><label class="subject" for="subject">Assunto</label><input type="text" id="subject" class="subject-sty" placeholder="Defina um tópico sucinto para notificar os autores..."></input><label for="txtarea" class="container-sty">Conteúdo</label><textarea class="text-sty" id="txtarea"></textarea><div class="puglin-sty"><div class="main-puglin"><i class="fas fa-bold"></i><i class="fas fa-italic"></i></div><button class="button-send" onclick="enviar()">Enviar</button></div><hr class="send-sty">'

    let topicOne = discussions.parentNode
    topicOne.replaceChild(div, discussions)
}

function enviar() {
    let div = document.querySelector('.add-topic')
    let topicTwo = document.createElement('div')
    topicTwo.setAttribute('class', 'send-concluid')

    topicTwo.innerHTML = '<p class="paragraphOne">Seu tópico foi enviado com sucesso! :D</p><p class="paragraphTwo">Agradecemos por sua contribuição, uma notificação será enviada ao seu email assim que seu tópico for respondido!</p><p class="paragraphThree"><a href="#">Descubra outros trabalhos!</a></p><hr><button class="new-topic">criar novo tópico</button><div class="wait-feed"><img src="./assets/simbol-black.png"><p class="paragraphFour">Aguardando feedback dos autores</p><p class="paragraphFive"><a href="#">Editar tópico</p></p></div>'

    let topicThree = div.parentNode
    topicThree.replaceChild(topicTwo, div)

    let topicNew = document.querySelector('.new-topic')

    topicNew.addEventListener('click', () => {topicThree.replaceChild(div, topicTwo)})
}

function openAnswers() {
    let dots = document.querySelector('#check-p')
    let txt = document.querySelector('#check-text')
    let likes = document.querySelector('#like')
    let answers = document.querySelector('#answers')
    let comments = document.querySelector('#topics-discussed')

    if (dots.style.display === "none"){
        dots.style.display = 'inline';
        comments.style.display = 'none';
        txt.style.display = 'none';
        likes.innerHTML = '1 like';
        answers.innerHTML = '1 resposta'
    } else {
        dots.style.display = 'none';
        comments.style.display = 'inline';
        txt.style.display = 'inline';
        likes.innerHTML = '4 likes';
        answers.innerHTML = '4 respostas'
    }

}

(function videoDescr() {
    let video = document.querySelector('video')
    let paragraph = document.querySelector('.video-info .video-paragraph')
    let name = document.querySelector('.video-info .video-name')
    let paragraph2 = document.querySelector('.video-info .video-paragraphTwo')
    let img = document.querySelector('.video-info img')

    video.addEventListener('pause', function () {
        paragraph.style.display = 'inline'
        paragraph.innerHTML = 'Análise sensorial de preparações funcionais desenvolvidas para escolares entre 09 e 15 anos, do município de Campinas/SP'
        name.style.display = 'inline'
        name.innerHTML = 'Beatriz Christiane Melo'
        paragraph2.style.display = 'inline'
        paragraph2.innerHTML = 'FCA / Universidade Estadual de Campinas'
        img.style.display = 'inline'
      });

    video.addEventListener('play', function () {
        paragraph.style.display = "none"
        name.style.display = 'none'
        paragraph2.style.display = 'none'
        img.style.display = 'none'
    });

})();

(function navOpen() {
    let menuOpen = document.querySelector(".menu-nav")
    let btn = document.querySelector('.button-open')
    btn.addEventListener('click', function() {
        menuOpen.style.display = 'block'
    })
  })();

  
  (function navClose() {
    let menuClose = document.querySelector(".menu-nav")
    let btn = document.querySelector('.button-close')
    btn.addEventListener('click', function() {
        menuClose.style.display = 'none'
    })
  })();
