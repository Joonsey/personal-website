import tensorflow as tf
import os
from tensorflow.keras.preprocessing.sequence import pad_sequences
import json
import pickle

new_model = tf.keras.models.load_model("ML\my_saved_model.h5")

#new_model.summary()


# loading
with open('ML/tokenizer.pickle', 'rb') as handle:
    tokenizer = pickle.load(handle)

t = "xxx 2020 money cash card for FREE with your"
T = 189


def prepare_text(str):
    t = [str, ]    
    test_input_data = tokenizer.texts_to_sequences(t)
    test_input_data = pad_sequences(test_input_data, maxlen=T)
    return test_input_data



with tf.device('/cpu:0'):
    r = new_model.predict(prepare_text(t))
print(r)