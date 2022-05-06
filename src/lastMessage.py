import sys 
from pororo import Pororo

zsl = Pororo(task="zero-topic")

def getMessage(message): 
    print(message)
    return zsl(message, ['a', 'b'])
    
if __name__ == '__main__': 
    getMessage(sys.argv[1])
