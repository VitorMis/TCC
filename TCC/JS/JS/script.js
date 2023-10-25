document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('[data-translate]');
    const changeToEnglishButton = document.getElementById('change-to-english');
    const changeToPortugueseButton = document.getElementById('change-to-portuguese');


    // Dicionário de traduções por idioma
    const translations = {
        'pt': {
            'product-1-caption': 'ENGRENAGENS E COROAS BIPARTIDAS',
            'product-2-caption': 'PROTEÇÕES ESPIRAIS PARA ROLOS',
            'product-3-caption': 'apoio para rolos',
            'product-4-caption': 'rolamento de mancais',
            'product-5-caption': 'rolo de entrada e saida',
            'product-6-caption': 'Transmissão de máquina',
            'history-title': 'Nossa História',
            'history-paragraph-1': 'Fundada em 1986, na cidade de Mogi Mirim – SP – Brasil, pelo Sr. Lázaro Pulcinelli, a PACE é uma usinagem industrial voltada para a fabricação de peças seriadas e também especialista na fabricação própria de Transmissões para Fornos Industriais. No início fornecia apenas para as Indústrias de sua região e nos dias de hoje abrange diversos setores da Indústria Nacional e Internacional.',
            'history-paragraph-2': 'Além de fornecer para os maiores grupos do Brasil, a PACE também exporta seus produtos para outros países do mundo, com o armazenamento de suas peças visa atender prontamente a todos os pedidos com rapidez, e com honestidade buscamos sempre eliminar distâncias e barreiras levando a Qualidade e a Tranquilidade a todos os seus Clientes.',
            'history-paragraph-3': 'A experiência adquirida nesses mais de 30 anos e a vontade de sempre aprender a cada dia mais, faz com que a PACE encontre soluções e melhorias eficientes para seus Clientes Nacionais e Internacionais.',
            'history-paragraph-4': 'Uma empresa familiar, que conta com a experiência do Sr. Lázaro como Conselheiro, sendo administrada por sua Esposa formada em Pedagogia e seus Filhos, um Contador, um Engenheiro de Produção Mecânica e um Administrador de Empresas, unidos e que procuram sempre o melhor ambiente de trabalho para seus Colaboradores e também um atendimento diferenciado a todos os seus clientes.',
            'history-paragraph-5': 'Ao longo dos anos, a PACE realizou diversos investimentos em sua cadeia produtiva, como Máquinas CNC´s (Tornos e Centros de Usinagem) e também sistemas de montagem para suas peças, procurando sempre acompanhar as novas tecnologias e assim fornecer suas peças para os principais Fabricantes de Fornos e também para os Consumidores Finais, com excelente qualidade e baixo custo para os clientes.',

            'location':'Endereço Matriz',
            'location2':'Rodovia Engenheiro João Tosello <br />(SP 147)  km 68.5 ZIP Code: 13800-970 Mogi-Mirim / SP – Brazil',
            'title': 'Empresa Pace',
            'contact_us': 'Entre em contato com a Gente',
            'pace': 'Pace',
            'our_history': 'Nossa História',
            'products': 'Produtos',
            'contacts': 'Contatos',
            'work_with_us': 'Trabalhe Conosco',
            'image_description_1': '',
            'image_description_2': '',
            'welcome': 'Credibilidade há mais de <i><strong>30 anos</strong></i>',
            'our_products': 'Nossos Produtos',
            'consult_products': 'Consulte nossos produtos, nossa equipe está pronta para te atender.',
            'product_1': 'Conjunto Pega Rolo',
            'product_2': 'Conjunto Rolete para Caminhão Betoneira',
            'product_3': 'Rolamento Pace Cromo BT (Especial Rolete Betoneira)',
            'product_4': 'Rolamentos Industriais, Rolamentos Full Ball, Rolamentos para Alta Temperatura',
            'product_5': 'Conjunto Testina',
            'product_6': 'Proteção Espiral',
            'product_7': 'Engrenagens e Coroas Bipartidas',
            'product_8': 'Rolos Transportadores – Entrada e Saída',
            'check_products': 'Confira aqui nossos produtos',
            'product_image_1': '',
            'product_image_2': '',
            'product_image_3': '',
            'product_image_4': '',
            'product_image_5': '',
            'product_image_6': '',
            'our_history_description': 'Fundada em 1986, na cidade de Mogi Mirim – SP – Brasil, pelo Sr. Lázaro Pulcinelli, a PACE especializou-se na fabricação própria de Transmissões para Fornos Industriais, no início fornecia apenas para as Indústrias de sua região e nos dias de hoje abrange diversos setores da Indústria Nacional e Internacional.',
            'read_more': 'Veja Mais',
            'pace_world': 'PACE NO MUNDO',
            'pace_world_description': 'Exportamos nossos produtos para todo o Mundo, entre em contato com nossa Equipe.',
            'company_phone': '+55 19 3862-4590',
        },
        'en': {
            'product-1-caption': 'GEARS AND SPLIT CROWNS',
            'product-2-caption': 'SPIRAL PROTECTIONS FOR ROLLERS',
            'product-3-caption': 'support for rollers',
            'product-4-caption': 'bearing roller',
            'product-5-caption': 'entry and exit roller',
            'product-6-caption': 'Machine Transmission',
            'location':'Main Address',
            'location2':'Rodovia Engenheiro João Tosello <br />(SP 147) – km 68,5 CEP: 13800-970 Mogi-Mirim / SP – Brasil',
            'title': 'Pace Company',
            'contact_us': 'Contact Us',
            'pace': 'Pace',
            'our_history': 'Our History',
            'products': 'Products',
            'contacts': 'Contacts',
            'work_with_us': 'Work With Us',
            'image_description_1': '',
            'image_description_2': '',
            'welcome': 'Credibility for over <i><strong>30 years</strong></i>',
            'our_products': 'Our Products',
            'consult_products': 'Browse our products, our team is ready to assist you.',
            'product_1': 'Roller Pick Assembly',
            'product_2': 'Roller Assembly for Concrete Mixer Truck',
            'product_3': 'Pace Chrome BT Bearing (Special Concrete Mixer Roller)',
            'product_4': 'Industrial Bearings, Full Ball Bearings, High-Temperature Bearings',
            'product_5': 'Testina Assembly',
            'product_6': 'Spiral Protection',
            'product_7': 'Split Gears and Crowns',
            'product_8': 'Transport Rollers – Entry and Exit',
            'check_products': 'Check our products here',
            'product_image_1': '',
            'product_image_2': '',
            'product_image_3': '',
            'product_image_4': '',
            'product_image_5': '',
            'product_image_6': '',
            'our_history_description': 'Founded in 1986, in the city of Mogi Mirim – SP – Brazil, by Mr. Lázaro Pulcinelli, PACE specialized in the in-house manufacturing of Transmissions for Industrial Furnaces, initially supplying only to the industries in its region, and today it covers various sectors of the National and International Industry.',
            'read_more': 'Read More',
            'pace_world': 'PACE WORLDWIDE',
            'pace_world_description': 'We export our products to the whole world, contact our Team.',
            'company_phone': '+55 19 3862-4590',
            'history-title': 'Our History',
            'history-paragraph-1': 'Founded in 1986, in the city of Mogi Mirim – SP – Brazil, by Mr. Lázaro Pulcinelli, PACE is an industrial machining company focused on the production of serialized parts and also specializes in the in-house manufacturing of Transmissions for Industrial Furnaces. In the beginning, it supplied only to the industries in its region, and today it covers various sectors of the National and International Industry.',
            'history-paragraph-2': 'In addition to supplying the largest groups in Brazil, PACE also exports its products to other countries around the world. With the storage of its parts, it aims to promptly meet all orders with speed, and with honesty, we always seek to eliminate distances and barriers, bringing Quality and Peace to all its Customers.',
            'history-paragraph-3': 'The experience gained over more than 30 years and the desire to learn more every day makes PACE find efficient solutions and improvements for its National and International Customers.',
            'history-paragraph-4': 'A family business, led by Mr. Lázaro with his experience as a Counselor, and managed by his Wife, a graduate in Pedagogy, and their Children, an Accountant, a Mechanical Production Engineer, and a Business Administrator, united and always seeking the best working environment for their Collaborators and also providing differentiated service to all their customers.',
             'history-paragraph-5': 'Over the years, PACE has made various investments in its production chain, such as CNC Machines (Lathes and Machining Centers) and also assembly systems for its parts, always seeking to keep up with new technologies and thus provide its parts to the main Furnace Manufacturers and also to End Consumers with excellent quality and low cost for customers.',

        }
    };

     // Função para traduzir os elementos da página
     function translatePage(language) {
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[language][key] !== undefined) {
                element.innerHTML = translations[language][key];
            }
        });
    }

    // Evento de troca de idioma para inglês quando o botão "Switch to English" for clicado
    changeToEnglishButton.addEventListener('click', function () {
        translatePage('en'); // Traduz a página para o inglês
    });

    // Evento de troca de idioma para português quando o botão "Mudar para Português" for clicado
    changeToPortugueseButton.addEventListener('click', function () {
        translatePage('pt'); // Traduz a página para o português
    });

    // Use o idioma padrão ou o idioma armazenado no localStorage, se disponível
    const defaultLanguage = 'pt';
    const userPreferredLanguage = localStorage.getItem('userLanguage') || defaultLanguage;
    translatePage(userPreferredLanguage);
});
