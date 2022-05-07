import sys 
from pororo import Pororo

zsl = Pororo(task="zero-topic")

def getMessage(message): 
    print(zsl(message, ['금전', '연애', '취업']))
    
if __name__ == '__main__' : 
    getMessage(sys.argv[1])
