from keras.datasets import imdb
from keras.models import Sequential, model_from_json
from keras.layers import Dense, Activation, LSTM, Convolution1D, Flatten, Dropout
from keras.layers.embeddings import Embedding
from keras.preprocessing import sequence, text
from keras.callbacks import TensorBoard
from keras import optimizers
from sklearn.model_selection import train_test_split, KFold
from utils import *

import pandas as pd
import numpy as np
import pickle
# from preprocess_text import * #here
import gensim, json
from sklearn.decomposition import PCA
#import pandas as pd
from sklearn.preprocessing import StandardScaler
news_data = json.load(open("./ml/news_data.json", "r"))


#loading the model
d2v_model = gensim.models.doc2vec.Doc2Vec.load('./ml/model.bin')
#start testing
final = []

tokens = "City politician with close mainland links says this is reason for Beijing lobbying, even though it worries about its impact on front runner's popularity".split()
new_vector = d2v_model.infer_vector(tokens)
sims = d2v_model.docvecs.most_similar([new_vector])
for i in range(0, 35767):
    docvec = d2v_model.docvecs[i]
    result = int(news_data[i]['UniqueVistors'].replace(',',''))
    temp = [docvec, result]
    final.append(temp)
#print(final)

#printing the vector of document at index 1 in docLabels
# docvec = [d2v_model.docvecs[1]]
# print(docvec)
# pca = PCA(n_components=2)
# principalComponents = pca.fit_transform(docvec)
# principalDf = pd.DataFrame(data = principalComponents
#              , columns = ['principal component 1', 'principal component 2'])
# print(principalDf)




## Load training data
print("Load dataset...")
#X, invalid = texts_to_word_vec(word2vec, texts_flat)
#y = np.array(labels_flat)

X = np.empty((len(final), 300))
y = np.empty((len(final)))
for i in range(len(X)):
    X[i] = final[i][0]
    y[i] = final[i][1]
y_av = np.mean(y)
y_std = np.std(y)
for i in range(len(X)):
    y[i] = (final[i][1]-y_av)/y_std
# X = [np.array(f[0]) for f in final]
# y = final[:][1]

#invalid = invalid + np.where(y[:,0] > len(hist_diff_processed))[0].tolist()
# Clear invalid rows, e.g., empty text
#X = np.delete(X, invalid, axis=0)
#y = np.delete(y, invalid, axis=0)
#print("Shapes of X / y: {} / {}".format(X.shape, y.shape))

## Define model
# Convolutional model (3x conv, flatten, 2x dense)

WINDOW_SIZE = 3
print("Define model...")
model = Sequential()
# model.add(Convolution1D(64, WINDOW_SIZE, padding='same', input_shape=(X.shape[0], X.shape[1])))
# model.add(Convolution1D(32, 3, padding='same'))
# model.add(Convolution1D(16, 3, padding='same'))
#model.add(Flatten())
# Defines fraction of input units to drop
# model.add(Dropout(0.2))
model.add(Dense(300,activation='tanh', input_dim=X.shape[1]))
model.add(Dropout(0.2))
model.add(Dense(300,activation='tanh'))
model.add(Dropout(0.2))
model.add(Dense(300,activation='tanh'))
model.add(Dense(1,activation='linear'))
print("Model: "); model.summary()

sgd = optimizers.SGD(lr=0.01, decay=1e-6, momentum=0.9, nesterov=True)
model.compile(loss='mse', optimizer=sgd)
model.fit(X,y, epochs=3)


news_token = input().split()
predict_vectors = d2v_model.infer_vector(news_token)


model.save('scmp_model.h5')
y_predict = model.predict(predict_vectors.reshape(1,300))[0][0]
print ( y_predict * y_std+y_av)