import gensim, logging
import json
import nltk
from collections import defaultdict

from gensim import corpora
# sentences = [['first', 'sentence'], ['second', 'sentence']]
# # model = gensim.models.Word2Vec(sentences, min_count=1)

news_data = json.load(open("news_data.json", "r"))
# titleF = open("title.txt","w")
# desF = open("des.txt","w")
titles = []
descriptions = []
for i in range(0, 35767):
    try:
        titles.append(news_data[i]['Title'])
        descriptions.append(news_data[i]['Descriptions'])  
    except:
        descriptions.append('') 

# stoplist  = nltk.corpus.stopwords.words('english')
# texts = [[word for word in document.lower().split() if word not in stoplist]
#         for document in descriptions]
# frequency = defaultdict(int)
# for text in texts:
#     for token in text:
#         frequency[token] += 1
# texts = [[token for token in text if frequency[token] > 1] for text in texts]
# print(texts)
model = gensim.models.Doc2Vec(texts, vector_size=100, window=5, min_count=5, workers=4)
model.save("test.mld")
print(model.wv['computer', 'hi'] )
# dictionary = corpora.Dictionary(texts)
# dictionary.save('/tmp/deerwester.dict')
# print(dictionary)
# for t in titles:
#     titleF.write(t+'\n')
# for k in descriptions:
#     desF.write(k+'\n')
# print(model.wv.most_similar(positive=['woman', 'king'], negative=['man']))
# print(model.wv.similarity('woman', 'man'))