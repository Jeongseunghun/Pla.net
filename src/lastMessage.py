import sys 
from pororo import Pororo

zsl = Pororo(task="zero-topic")

def getMessage(message): 
    return zsl(message, ['연애', '금전'])
    
if __name__ == '__main__': getMessage(sys.argv[1])
