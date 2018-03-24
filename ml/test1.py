import gensim, json
from sklearn.decomposition import PCA
import pandas as pd
from sklearn.preprocessing import StandardScaler
news_data = json.load(open("news_data.json", "r"))

#loading the model
d2v_model = gensim.models.doc2vec.Doc2Vec.load('model.bin')
#start testing
final = []

tokens = "City politician with close mainland links says this is reason for Beijing lobbying, even though it worries about its impact on front runner's popularity".split()
new_vector = d2v_model.infer_vector(tokens)
sims = d2v_model.docvecs.most_similar([new_vector])
for i in range(0, 35767):
    docvec = [d2v_model.docvecs[i]]
    result = news_data[i]['UniqueVistors']
    temp = [docvec, result]
    final.append(temp)
print(final)
#printing the vector of document at index 1 in docLabels
# docvec = [d2v_model.docvecs[1]]
# print(docvec)
# pca = PCA(n_components=2)
# principalComponents = pca.fit_transform(docvec)
# principalDf = pd.DataFrame(data = principalComponents
#              , columns = ['principal component 1', 'principal component 2'])
# print(principalDf)